interface SummaryProps {
  count: number
  countAccomplished: number
}

export function Summary(summaryProps: SummaryProps) {
  const { count, countAccomplished } = summaryProps

  return (
    <div className="summary">
      <div className="summary-content">
        <div>
          <span className="summary-created">Created Tasks</span>
          <span className="summary-numbers">{count}</span>
        </div>
        <div>
          <span className="summary-accomplished">Accomplished</span>
          <span className="summary-numbers">{`${countAccomplished} de ${count}`}</span>
        </div>
      </div>
    </div>
  )
}
