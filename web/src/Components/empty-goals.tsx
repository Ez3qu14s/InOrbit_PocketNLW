import logo from '../assets/logo.svg'
import letsStart from '../assets/lets-start-illustration.svg'
import { Button } from '../Components/ui/button'
import { DialogTrigger } from '../Components/ui/dialog'
import { Plus } from 'lucide-react'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="Let's start" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus /> Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
