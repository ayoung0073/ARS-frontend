import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'antd/dist/antd.css';
import { Rate, Select, Calendar } from 'antd';

function ProblemForm() {

    return (
        <Container className="container">
            <Title placeholder="제목을 입력하세요"></Title>
            <TagLine />
            <TagInput placeholder="태그를 입력하세요"></TagInput>
            <div id="tag-block"></div>
            <LinkLine />
            <LinkInput placeholder="문제 링크를 입력하세요"></LinkInput>
            <LinkLine />
            <Notification />
            <StepContainer><StepTitle>난이도</StepTitle><Step value="1" /></StepContainer>
            {/* <Step value="1" /></StepContainer> */}
            <Editor
                initialValue=""
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
            />
            <Button className="btn btn-dark">등록하기</Button>
        </Container>
    )
}

function Notification() {
    return (
        <CustomSelect defaultValue="0">
            <option value="0" selected>알림 기한 설정</option>
            <option value="5">일주일 후 알림</option>
            <option value="4">이주일 후 알림</option>
            <option value="3">한 달 후 알림</option>
            <option value="2">두 달 후 알림</option>
            <option value="1">세 달 후 알림</option>
        </CustomSelect>
    )
}

const CustomSelect = styled(Select)`
    float: right;
    width: 50%
`

const Container = styled.div`
    margin-top: 2%;
`

const Title = styled.textarea`
    display: block;
    padding: 0px;
    font-size: 2.75rem;
    width: 100%;
    line-height: 1.5;
    outline: none;
    border: none;
    font-weight: bold;
    height: 90px;
    color: rgb(33, 37, 41);
`

const TagLine = styled.div`
    background: rgb(73, 80, 87);
    background: grey;
    height: 6px;
    width: 4rem;
    margin-bottom: 1rem;
    border-radius: 1px;
`

const TagInput = styled.input`
    display: inline-flex;
    cursor: text;
    font-size: 1.125rem;
    line-height: 2rem;
    border: none;
`

const LinkLine = styled.div`
    background: lightgray;
    height: 3px;
    width: 2rem;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    border-radius: 1px;
`

const LinkInput = styled.input`
    display: block;
    padding: 0px;
    font-size: 1.125rem;
    width: 100%;
    resize: none;
    line-height: 1.5;
    outline: none;
    border: none;
    color: rgb(33, 37, 41);
    height: 30;
`

const StepContainer = styled.div`
    margin-bottom: 1%;
    vertical-align: center;
`

const StepTitle = styled.span`
    font-size: 1.05rem;
    color: #66655b;
    display: inline;
    margin-right: 14px;
`

const Step = styled(Rate)`
    font-size: 25px;
`

const Button = styled.button`
    float: right;
    margin-top: 10px;
`

export default ProblemForm;
