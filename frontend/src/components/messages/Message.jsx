

const Message = () => {


    return (
        <div className={`chat chat-end`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQd3mXTW2IyHPetzqQguUdlgL5o2AKL8w0UPK5jocC7L8LFvYMer88nvR2g1rn-HdTPI&usqp=CAU'} />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500  pb-2`}>message</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:15 PM</div>
        </div>
    );
};
export default Message;