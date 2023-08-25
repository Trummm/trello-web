import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '../../../utils/sorts'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DARG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DARG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DARG_ITEM_TYPE_CARD',
}

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  })
  const sensors = useSensors(pointerSensor)
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  })
  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    )

    setOrderedColumnsState(orderedColumns)
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumnsState.find((column) =>
      column.cards.map((card) => card._id)?.includes(cardId)
    )
  }

  const handleDragStart = (e) => {
    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DARG_ITEM_TYPE.CARD
        : ACTIVE_DARG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(e?.active?.data?.current)
  }

  const handleDragOver = (e) => {
    if (activeDragItemType === ACTIVE_DARG_ITEM_TYPE.COLUMN) return

    const { active, over } = e

    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active
    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumnsState((prevColumns) => {
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        )

        let newCardIndex
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        )
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        )

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          )

          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          )
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          )

          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          )

          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          )
        }

        return nextColumns
      })
    }
  }

  const handleDragEnd = (e) => {
    const { active, over } = e

    if (activeDragItemType === ACTIVE_DARG_ITEM_TYPE.CARD) {
      return
    }
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumnsState.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id)

      const dndOrderedColumns = arrayMove(
        orderedColumnsState,
        oldIndex,
        newIndex
      )
      setOrderedColumnsState(dndOrderedColumns)
      setActiveDragItemId(null)
      setActiveDragItemType(null)
      setActiveDragItemData(null)
    }
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.5' } },
    }),
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          backgroundColor: '#1d2125',
          height: (theme) => theme.trello.boardContentHeight,
          width: '100%',
          borderTop: '1px solid #31373b',
          p: '10px 0',
        }}
      >
        <ListColumns columns={orderedColumnsState} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DARG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DARG_ITEM_TYPE.CARD && (
            <Card card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
