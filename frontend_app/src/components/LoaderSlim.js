
export const LoaderSlim = (props) => {

    const { status } = props

    return(
        <div className="loader-slim mt-4 mb-4" style={ status === 'pending' ? {display: 'block'} : {display: 'none'}}>

            <p><small>Loading...</small></p>
        </div>
    )
}