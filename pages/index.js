import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:1338/articles`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({data}) {
  // http://localhost:1337/articles?id=2
  console.log(data)
  var teste = "minha variavel teste";
  return (
    <div className={styles.container}>
      {bodyB(data)}
    </div>
  )
}

function bodyB(data){

    const bodyF= data.map( (a)=>

       <div key={a.id}>
         <Head>
           <title>{a.title}</title>
         </Head>
         <main className={styles.main}>
           <h1 className={styles.description}>
             {a.description}
           </h1>
           <p className={styles.description}>
             {a.content}
           </p>
          </main>
        <footer className={styles.footer}>
          <p>
            Autor: {a.writer.name}
            {/* <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span> */}
          </p>
        </footer>
      </div>
     
  )
  return bodyF
}
