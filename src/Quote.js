function Quote(props) {
    console.log(typeof props.data[0]);
    return (
        <div className='mt-20 flex flex-col w-2/5'>
            {typeof props.data[0] == 'object' ? (
                <div className=' font-medium text-gray-900 w-full h-80 rounded-lg bg-gray-200 flex flex-col items-center'>
                    <div className=' text-xl m-4 p-4 border-2 rounded-lg mb-4 border-gray-900'>
                        <h1>{props.data[0].quote}</h1>
                    </div>
                    <div className=' p-4 border-2 rounded-lg mb-4 border-gray-900'>
                        <p>
                            <span className='font-normal'>Author: </span>
                            {props.data[0].author}
                        </p>
                    </div>
                    <button
                        className='rounded-full fixed top-1/3 bg-opacity-30 hover:bg-gray-100 hover:text-gray-800 text-gray-100 font-semibold py-2 px-4 bg-gray-700 shadow'
                        onClick={props.clickApi}>
                        Change
                    </button>
                </div>
            ) : (
                <p>Nothing here</p>
            )}
        </div>
    );
}

export default Quote;
