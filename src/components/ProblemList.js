import styled from "styled-components";
import 'antd/dist/antd.css';

function ProblemList(props) {
    const problemList = props.problemList
    {
        return (
            <div className="container">
                <br />
                {problemList.length != 0 &&
                    problemList.map((problem) => {
                        return (
                            <CardComponent className="card m-2">
                                <Card title={problem.title} step={problem.step} tagList={problem.tagList} />
                            </CardComponent>
                        )
                    })}
            </div>
        )
    }
}
function Card(props) {
    return (
        <div>
            <Step>{"⭐️".repeat(props.step)}</Step><br />
            <div className="card-body">
                <div className="card-title"><h4>{props.title}</h4></div>
                <br />
                <TagList tagList={props.tagList} />
            </div>
        </div>
    )
}

function TagList(props) {
    const tagList = props.tagList
    return (
        <div>
            {tagList.length != 0 &&
                tagList.map((o) => {
                    return (
                        <TagButton>{o.tag.tagName}</TagButton>
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
const Step = styled.div`
    float: right;
    font-weight: bold;
    font-size: 22px;
    margin-right: 8px;
    margin-top: 6px;
`
const CardComponent = styled.div`
    margin: 5px;
    width: 400px;
    display: inline-block;
`
export default ProblemList;
