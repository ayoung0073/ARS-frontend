import styled from "styled-components";
import { Link } from "react-router-dom";

function TagList(props) {
    const tagList = props.tagList
    return (
        <div>
            {tagList.length != 0 &&
                tagList.map((o) => {
                    return (
                        <Link to={`/tags/name=${o.tag.tagName}`} style={{ textDecoration: 'none' }}><TagButton>{o.tag.tagName}</TagButton></Link>
                    )
                })}
        </div>
    )
}

const TagButton = styled.div`
    margin-bottom: 0.875rem;
    background: rgb(241, 243, 245);
    border: white;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(12, 166, 120);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 3px;
    margin-right: 3px;
`

export default TagList;
