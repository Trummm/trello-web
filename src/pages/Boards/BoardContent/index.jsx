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
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

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

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    )

    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (e) => {
    const { active, over } = e

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
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
      </Box>
    </DndContext>
  )
}

export default BoardContent
