import Image from 'next/image'
import nosotros from "../../../public/nosotros.jpg";

export default function Nosotros() {
  return (
   <section className='h-screen relative w-full'>

  <div className=' z-10 bg-white/60 backdrop-blur-sm w-full h-full absolute pt-10 top-0 left-0 '>
    <div className='flex flex-col items-center justify-center text-gray-800 w-10/12 mx-auto'>

    
      <h2 className='text-3xl  font-medium my-14'>NOSOTROS</h2>
      <p className='text-center font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus, nam aut doloribus eveniet sequi architecto laboriosam illum accusantium, reprehenderit praesentium laudantium fuga sunt ea necessitatibus rerum tempore voluptates est?
        Voluptate eaque ea quam quibusdam maiores sunt explicabo iusto suscipit! Eaque fugiat eveniet nesciunt similique temporibus eum maxime deserunt, labore dolorum quasi facere perspiciatis totam assumenda sint nam fuga! Possimus.
        Alias similique, cumque non consequuntur natus maiores tempore voluptatibus perferendis, velit nulla temporibus quis perspiciatis id in totam quibusdam ratione commodi asperiores consequatur aliquid modi, repudiandae optio. Et, magnam molestiae.
        Dolores recusandae, pariatur expedita ad vitae nulla vero ut adipisci? Tempora nesciunt expedita incidunt obcaecati, modi vero odit? Hic consequatur sunt fuga qui laborum soluta facere, aliquid minus nesciunt sed!
        Accusantium libero, iure quaerat eligendi, minus ducimus tempore et placeat quae ipsum sequi fuga perspiciatis praesentium asperiores possimus provident nulla vero! Quia laudantium quibusdam quam eum corrupti totam porro praesentium?
        Incidunt ipsam similique nesciunt, ducimus ratione dolorem nisi. Id cumque amet atque, ipsam minus, nemo odio aliquid, cupiditate consequatur expedita accusamus animi itaque modi reiciendis. Ad praesentium quibusdam exercitationem debitis?
        Delectus perspiciatis molestias minima iure ullam natus porro, veniam ad cum, ipsa at modi hic qui eius voluptas est, omnis optio impedit rerum quos incidunt blanditiis? Dicta repellendus dignissimos rem.
        Cum nihil obcaecati tenetur animi atque, blanditiis voluptatibus iure fuga ut voluptate tempora voluptas accusamus repellat, reiciendis quis? Autem nulla obcaecati esse tenetur? Veniam magni ipsa tempora quia voluptatibus delectus.
        Porro, voluptatum quaerat id voluptas est deleniti optio corrupti tempore. Illo in delectus dolorum praesentium ex, commodi harum consequatur placeat architecto pariatur corrupti, modi qui. Laboriosam sint veritatis officiis itaque.
        Esse adipisci sunt in natus quo minus quae cumque, facilis ducimus tempora vitae iste aut quia saepe autem fugit, illum totam deserunt, omnis ipsam! Facere numquam magnam illum distinctio veritatis.
        
      </p>
      <button
    className=" border-primary-200 border text-primary-200  capitalize px-3 py-2 text-lg mt-20 hover:bg-primary-200 hover:border-white hover:text-white duration-300">
    Mas Información
    </button>
      </div>
      </div>
    <div className="absolute left-0 top-0 w-screen h-full z-0  ">
        {" "}
        <Image
          alt="backgrounNosotros"
          src={nosotros}
          className="object-cover saturate-50"
          fill
          quality={100}
        />
      </div>
   </section>
  )
}
