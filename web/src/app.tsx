import { Dialog } from './Components/ui/dialog'
import { CreateGoal } from './Components/create-goal'
import { Summary } from './Components/summary'
// import { EmptyGoals } from './Components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}

      <Summary />

      <CreateGoal />
    </Dialog>
  )
}
