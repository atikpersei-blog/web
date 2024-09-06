'use client';

export default function SelectButton({ isOpen, onClick, text, actions }: { isOpen: boolean, onClick: () => void, text: string, actions: any[] }) {
  return (
    <div>
      <button className={`border border-dashed rounded-md m-2 px-2 py-1 ${isOpen ? 'bg-gray-200' : 'bg-white'}`} onClick={onClick}>{text}</button>

      <div className={`fixed -ml-26 p-2 w-40 border rounded-lg bg-white ${isOpen ? '' : 'hidden'}`}>
        {actions.map((action: any, index) => {
          return (
            <div className='flex' key={index}>
              <button onClick={action.onclick}>{action.text}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}