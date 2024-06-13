import noProjectImage from '@/assets/no-projects.png';

export function NoProjectSelected({ onStartAddProject }: any) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt="An empty project list" />
      <h2 className="text-xl font-bold to-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <BaseButton type="button" onClick={onStartAddProject}>Create new project</BaseButton>
      </p>
    </div>
  );
}
