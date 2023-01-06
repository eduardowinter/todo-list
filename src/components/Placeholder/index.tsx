import clipboard from '../../assets/clipboard.svg'

export function Placeholder() {
  return (
    <div className="empty-todo-list-container">
      <div className="empty-todo-list">
        <img src={clipboard} alt="Clipboard Icon" />
        <p>
          <span className="logo react">You have no todo&apos;s added yet</span>
          <br />
          Create your todo&apos;s list and organize your day
        </p>
        <span></span>
      </div>
    </div>
  )
}
