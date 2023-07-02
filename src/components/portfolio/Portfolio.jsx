import React from 'react'
import PortfolioCarousel from '../carousel/Carousel'
import fern from '../images/fern.jpg'
import potteryThrow from '../images/pottery-throw.jpg'
import porcelain from '../images/porcelain.jpg'

function Portfolio() {
  return (
    <div>
        <div className="content" style={{width: "100vw"}}>
        <div
        class="container-fluid py-2"
        style={{ alignItems: "center", justifyContent: "center" }}>
            <PortfolioCarousel /> 
        </div>
        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <img src={fern} alt="fern" style={{width: "48vw"}} /> 
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        </section>
        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
            <img src={potteryThrow} alt="pottery being thrown on the wheel" style={{width: "48vw"}} /> 
        </section>
        <section style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "1%"}}>
            <img src={porcelain} alt="porcelain vase" style={{width: "48vw"}} /> 
            <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
            Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
            Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
            Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
            Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        </section>
        </div>
    
        <div className='media-content'>
        <img src={fern} alt="fern" style={{width: "85vw"}} /> 
        <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
        Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
        Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
        Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
        Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        <img src={potteryThrow} alt="pottery being thrown on the wheel"  style={{width: "85vw"}} /> 
        <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
        Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
        Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
        Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
        Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        <img src={porcelain} alt="porcelain vase" style={{width: "85vw"}} /> 
        <p style={{padding: "2%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et, incidunt in dolorem culpa optio est necessitatibus dolore magni eius ipsa reiciendis quo ab dicta! Nulla nihil voluptas quas eum?
        Repellendus esse, doloribus nesciunt ab qui debitis quod eligendi deleniti animi aliquid odit. Suscipit aspernatur esse consequatur consequuntur optio reprehenderit sequi inventore, rerum ex harum, sit ullam vero ab sint.
        Cupiditate porro totam doloribus culpa fugit aliquid quae itaque debitis suscipit cum! Nesciunt saepe officia, animi rem vitae reprehenderit voluptate voluptates maiores nam vero. Nostrum similique deserunt quaerat! Ducimus, dolor?
        Temporibus quisquam dolorum, modi velit ipsa in doloribus omnis ex incidunt aperiam delectus at. Illo, tenetur. Impedit aut adipisci nam dolor nisi, eaque recusandae, unde est assumenda sit commodi in!
        Amet saepe labore libero ullam molestias doloremque voluptatibus officia non quos voluptatum, veritatis magnam fuga cumque fugit mollitia, nisi repellat, nihil voluptate optio incidunt enim vero eos cum? Commodi, doloribus.</p>
        </div>
    </div>
  )
}

export default Portfolio