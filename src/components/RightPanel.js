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

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const RightPanel = () => {
  const [selectedId, setSelectedId] = useState(0);

  const [projectCards, setProjectCards] = useState([
    { id: 1, projectName: "RMS" },
    { id: 2, projectName: "Tattoo" },
    { id: 3, projectName: "Gradiance Ticketing App" },
    { id: 4, projectName: "Tattoo" },
    { id: 5, projectName: "Gradiance Ticketing App" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [activeCardId, setActiveCardId] = useState(null);

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
    setActiveCardId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveCardId(null);
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
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
        >
          <div className="projectCards">
            <SortableContext items={projectCards} strategy={() => null}>
              {projectCards.map((projectCard, ind) => (
                <ProjectCard
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  index={ind}
                  projectName={projectCard.projectName}
                  key={projectCard.id}
                  id={projectCard.id}
                  activeCardId={activeCardId}
                />
              ))}
            </SortableContext>
            <DragOverlay adjustScale={false}>
              {activeCardId &&
              projectCards.some((i) => i.id === activeCardId) ? (
                <ProjectCard
                  selectedId={selectedId}
                  index={projectCards.find((i) => i.id === activeCardId)?.index}
                  projectName={
                    projectCards.find((i) => i.id === activeCardId)?.projectName
                  }
                  key={activeCardId}
                  id={activeCardId}
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
