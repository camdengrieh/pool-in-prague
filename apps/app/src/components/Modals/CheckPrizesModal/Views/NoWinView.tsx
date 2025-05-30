import { Button } from '@shared/ui'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { noWinAnimation } from '../animations'

interface NoWinViewProps {
  onGoToAccount: () => void
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const NoWinView = (props: NoWinViewProps) => {
  const { onGoToAccount } = props

  const t = useTranslations('Account.prizeChecking')

  return (
    <div className='flex flex-col items-center'>
      <span className='text-center text-3xl font-grotesk font-medium text-gray-100'>
        {t('noPrizes')}
      </span>
      <Lottie
        animationData={noWinAnimation}
        loop={true}
        className='w-full max-w-xs h-auto pointer-events-none'
      />
      <Button onClick={onGoToAccount} className={classNames('mx-auto')}>
        {t('viewAccount')}
      </Button>
    </div>
  )
}
