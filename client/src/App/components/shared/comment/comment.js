import React, {Fragment, useState} from 'react';
import ReplyComponent from '../replyComponent/replyComponent';

export default function Comment(props) {
    const [openReply,setOpenReply] = useState(false);
    const handleReplyEvent = (event)=>{
        setOpenReply(!openReply);
    }

    return(
        <Fragment>
        <li>{props.data.comment} <button onClick={handleReplyEvent}>Reploy to comment</button></li>
        {openReply && <ReplyComponent id={props.data._id} />}

        {
            props.data.comments != null? props.data.comments.map((value,index)=>{
                return (<Comment data={value}/>);
            }):null
        }

        </Fragment>
    )
}