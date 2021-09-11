import React from 'react'

import styles from './styles.module.css'

type filterType = 'all' | 'active' | 'completed'

type TodoFilterProps = {
  filter: filterType
  onChangeFilter: (filter: filterType) => void
}

const filterOptions = [
  { value: 'all' as filterType, text: 'All' },
  { value: 'active' as filterType, text: 'Active' },
  { value: 'completed' as filterType, text: 'Completed' }
]

export const TodoFilter: React.FC<TodoFilterProps> = ({
  filter,
  onChangeFilter
}) => {
  return (
    <>
      <div className={styles.container}>
        {filterOptions.map((x) => (
          <div
            key={x.value}
            onClick={() => onChangeFilter(x.value)}
            className={`${styles.link} ${
              x.value == filter ? styles.active : ''
            }`}
          >
            {x.text}
          </div>
        ))}
      </div>
      <div className={styles.text}>Drag and drop to reorder list</div>
    </>
  )
}
