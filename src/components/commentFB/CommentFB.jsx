import React from 'react'

export default function CommentFB({ id }) {
    return (
        <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
            <div id="fb-root"></div>
            <div className="fb-comments"
                data-href={`https://quanlykhachsan.vercel.app/bai-viet/${id}`}
                data-width="1000" data-numposts="5">
            </div>
        </div>
    )
}
