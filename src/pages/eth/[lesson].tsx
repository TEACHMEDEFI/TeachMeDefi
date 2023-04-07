import React from 'react'

type Props = {}

export default function LessonPage({ }: Props) {
  return (
    <main className='w-full flex flex-col  items-center ' >
      <section className='w-full' >
        <div className='w-full relative' >
          {/* <div className='aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 150px)" }} ></div> */}
          <div className=' w-full aspect-video ' style={{ maxWidth: "calc(100vw - 20px *2)", maxHeight: "calc(100vh - 180px)" }} >
            <iframe
              className='w-full h-full absolute top-0 left-0 rounded-t-lg'
              src="https://www.youtube.com/embed/tVj0ZTS4WF4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
        <div className='w-full  bg-bgDarkerGray rounded-b-lg p-10 flex flex-col space-y-5' >
          <h2 className='font-bold text-2xl ' > 1. How to Bitcoin </h2>
          <h3 className='font-bold text-xl '>Transcript</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate iure rerum dolorem voluptates modi? Placeat, natus eos. Omnis a nulla et asperiores, repellendus laboriosam consequuntur maxime, voluptas inventore doloremque ducimus.
            Repellendus laudantium quis amet! Nisi, cupiditate eius sed quibusdam est amet exercitationem dolorum dolores repudiandae maiores itaque sit incidunt soluta laudantium modi optio illo alias magni suscipit at fuga mollitia!
            Quae soluta, incidunt quidem sit neque iure voluptatum architecto. Voluptate mollitia sint eum, excepturi deleniti tempore ut harum animi ipsum accusamus sapiente. Quia, ipsam nulla iste laudantium quas maiores fuga.
            Doloribus, expedita error assumenda dolorum perspiciatis molestiae ipsa. Deleniti nulla, obcaecati, nam in nesciunt expedita libero quidem possimus earum perferendis ex explicabo ducimus officia quisquam necessitatibus veniam amet sed maiores.
            Consequuntur quo totam, officia, repudiandae, inventore consequatur nulla delectus maiores dolores minus nam eveniet nostrum accusamus unde enim corrupti laudantium voluptates saepe. Aspernatur molestias facilis inventore asperiores laborum, sapiente id.
            Fuga aspernatur incidunt et minus eius, labore quae perspiciatis, at quos veniam voluptatem ea nulla ipsam. Ipsa rerum aliquid earum distinctio eveniet molestias nam! Explicabo officiis ad cumque ut aut?
            Labore iure dolore adipisci vel quae accusantium tenetur harum neque, culpa porro a, praesentium, consectetur beatae amet. Id nihil sunt, tempora voluptas neque facere rerum porro nostrum saepe laborum similique?
            Ullam eos expedita nihil voluptate accusamus asperiores velit esse odit hic harum ex similique quae a quia, dolorem animi culpa nostrum natus aliquam atque nisi? Iste modi repellendus beatae omnis.
            Magni, vitae non tenetur itaque totam alias voluptatem architecto facilis fugit facere magnam voluptate labore porro iusto laborum? Dolorem accusamus placeat maxime aut quas ad doloremque alias ex? Laboriosam, blanditiis!
            Harum laboriosam quod temporibus. Est similique tempora nihil reprehenderit eveniet facilis assumenda id libero numquam dolores. Laborum quaerat, nisi magni inventore magnam dolore molestiae facilis exercitationem omnis eius. Minus, amet.
            Aliquam excepturi, pariatur, quae tempore nam porro maxime rerum consequuntur error incidunt, iste assumenda? Corporis amet, porro rerum impedit placeat maxime animi magni ut dolor, optio nulla alias repellendus eligendi.
            Dicta, quae debitis architecto dignissimos voluptatem placeat aliquid mollitia nulla exercitationem tenetur natus maxime laboriosam quaerat, molestiae porro labore a sed veritatis saepe voluptates reiciendis, recusandae iusto. Et, excepturi voluptatem?
            Omnis libero nisi consequatur eum deserunt distinctio maxime, voluptate quibusdam aperiam placeat debitis reprehenderit eos, temporibus ea sequi qui a optio saepe error aliquid? Ducimus obcaecati facere debitis libero nobis!
            Repudiandae non similique ab at maxime itaque facere vero, excepturi tempora veritatis harum officia voluptate inventore, sunt et unde impedit accusamus aperiam. Sint sunt voluptates similique voluptatum eveniet ipsum impedit!
            Natus ad maiores id. Vitae itaque doloribus quaerat praesentium ipsam quod atque. Libero voluptatum, nostrum, voluptas mollitia fuga, reprehenderit hic eligendi alias exercitationem iusto non ipsam incidunt! Optio, distinctio quae?
          </p>
        </div>
      </section>
      <footer>
        
      </footer>
    </main>
  )
}