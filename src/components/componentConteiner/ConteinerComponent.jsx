import './ConteinerComponent.css'

function ConteinerComponent ({children}) {

    return (
        <main>
            <section className='Container-Cards'>
                <div>{children}</div>
            </section>
        </main>
    )
}

export {ConteinerComponent}