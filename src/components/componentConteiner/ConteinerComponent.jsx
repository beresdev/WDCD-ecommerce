import './ConteinerComponent.css'

function ConteinerComponent ({children}) {

    return (
        <main>
            <section className='Container-Cards'>
                {children}
            </section>
        </main>
    )
}

export {ConteinerComponent}