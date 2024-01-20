import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  DndContext,
  closestCenter,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const RightPanel = () => {
  const [selectedId, setSelectedId] = useState(2);

  const [projectCards, setProjectCards] = useState([
    { id: 1, projectName: "RMS" },
    { id: 2, projectName: "RMS" },
    { id: 3, projectName: "RMS3" },
    { id: 4, projectName: "RMS4" },
    { id: 5, projectName: "RMS5" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  // const { isOver, setNodeRef } = useDroppable({
  //   id: "droppable",
  // });

  const [active, setActive] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setProjectCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleDragStart = (event) => {
    const { active, over } = event;

    console.log(active, over);
    setIsCollapsed(true);
    setActive(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActive(null);
    setIsCollapsed(false);
  };

  return (
    <div className="rightPanel">
      <div className="rightPanelTabContainer">
        <div className="rightPanelTab selected">Projects</div>
        <div className="rightPanelTab">Today</div>
      </div>
      <div className="rightPanelBody">
        <div className="addAProject">+ add project</div>
        <DndContext
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          sensors={sensors}
          collisionDetection={closestCorners}
        >
          <div className="projectCards">
            <SortableContext items={projectCards} strategy={() => null}>
              {projectCards.map((projectCard, ind) => (
                <ProjectCard
                  selectedId={selectedId}
                  isCollapsed={isCollapsed}
                  index={ind}
                  projectName={projectCard.projectName}
                  key={projectCard.id}
                  id={projectCard.id}
                />
              ))}
            </SortableContext>
            <DragOverlay adjustScale={false}>
              {active && projectCards.some((i) => i.id === active) ? (
                // <ProjectCard key={active} id={active} />
                <ProjectCard
                  selectedId={selectedId}
                  isCollapsed={isCollapsed}
                  index={projectCards.find((i) => i.id === active)?.index}
                  projectName={
                    projectCards.find((i) => i.id === active)?.projectName
                  }
                  key={active}
                  id={active}
                />
              ) : null}
            </DragOverlay>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default RightPanel;
