import Image from 'next/image'
import Titulo from '@/components/titulo'
import Subtitulo from '@/components/subtitulo'
import Botao from '@/components/botao'

export default function Home() {
  return (
    <main>
      <Titulo name='selecionar apolice'></Titulo>
      <Subtitulo></Subtitulo>
      <Botao></Botao>
    </main>
  )
}
