import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Pricing({
  perks,
  mostPopular = false,
  planName,
  description,
  price,
}: {
  perks: string[]
  mostPopular?: boolean
  planName: string
  description: string
  price: string
}) {
  return (
    <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack flex flex-col justify-between rounded-base border-2 bg-white p-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-heading">{planName}</h3>
          {mostPopular && (
            <span className="border-border text-text dark:border-darkBorder rounded-base border-2 bg-main px-2 py-0.5 text-sm">
              Most popular
            </span>
          )}
        </div>
        <p className="mb-3 mt-1">{description}</p>
        <div>
          <span className="text-2xl font-heading">Age {price}</span>{' '}
          <span>years</span>{' '}
        </div>

        {/* New Section for "This exam covers" */}
        <p className="mt-5 text-lg font-semibold">This exam covers:</p>
        <ul className="mt-2 flex flex-col gap-2">
          {perks.map((perk) => {
            return (
              <li key={perk} className="flex items-center gap-3">
                <Check className="shrink-0" size={20} /> {perk}
              </li>
            )
          })}
        </ul>
      </div>

      <Button
        size={mostPopular ? 'lg' : 'default'}
        className={cn(
          'mt-12 text-lg w-full',
          mostPopular
            ? 'bg-main border-black shadow-[4px_4px_0px_#000] text-black' // Most popular button
            : 'bg-white text-black shadow-[4px_4px_0px_#000]' // Normal button
        )}
      >
        Enroll
      </Button>
    </div>
  )
}
