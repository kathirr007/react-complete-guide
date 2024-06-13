import React from 'react';

export function NewProject({ onAdd }: { onAdd: Function }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = (title.current as unknown as HTMLInputElement).value;
    const enteredDescription = (description.current as unknown as HTMLInputElement).value;
    const enteredDueDate = (dueDate.current as unknown as HTMLInputElement).value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      (modal.current as any)?.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>
      <BaseModal ref={modal} closeBtnLabel="Close">
        <h2 className="text-xl font-bold to-stone-700 my-4">Invalid Inputs</h2>
        <p className="text-stone-500 mb-4">Oops..! looks like you forgot to enter a value.</p>
        <p className="text-stone-500 mb-4">Please make sure you have provided valid value for all inputs.</p>
      </BaseModal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button type="button" className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" type="button">
              Save
            </button>
          </li>
        </menu>
        <div>
          <BaseInput ref={title} label="Title" id="projectTitle" />
          <BaseInput ref={description} label="Description" id="projectDescription" isTextarea />
          <BaseInput type="date" ref={dueDate} label="Due Date" id="projectDueDate" />
        </div>
      </div>
    </>
  );
}
