import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const photos = ['cocodrilo', 'garza', 'patitos', 'gokarts', 'portrait', 'pregnancy']

export default function AboutMePhotography() {

  Fancybox.bind('[data-fancybox="gallery"]', {})

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
            photos.map(photoName => {
                return (
                    <a key={photoName} href={`/assets/images/photography/${photoName}.webp`} data-fancybox="gallery" data-caption="Single image">
                    <img  src={`/assets/images/photography/${photoName}.webp`} className="rounded-xl" loading="lazy" alt={`${photoName} photography`}/>
                  </a>
                )
            })
        }
  
    </section>
  )
}