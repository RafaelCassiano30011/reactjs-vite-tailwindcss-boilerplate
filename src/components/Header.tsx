import Logo from '../assets/logo.png'
import IconLogout from '../assets/logout.png'

export default function Header() {
  return (
    <div className="w-full bg-primary-500 px-10 py-6">
      <div className="flex items-center justify-between">
        <img
          className="h-auto max-w-[121px]"
          width={121}
          height={73}
          src={Logo}
          alt="Logo Hcor"
        />

        <a href="/logout" className="flex items-center gap-7 text-white">
          <span>Olá, William Rodrigues da Silva</span>
          <img width={28} height={28} src={IconLogout} alt="Icone de saida" />
        </a>
      </div>
    </div>
  )
}
