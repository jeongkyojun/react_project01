import React from "react";
import { StyledBoardDetailBody } from "./style";
import ReactMarkdown from "react-markdown";
import MDEditor from "@uiw/react-md-editor";

const BoardDetailBody = ({texts,onChangeHandler})=>{
    return(
        <StyledBoardDetailBody>
            <MDEditor
                value={texts}
                onChange={onChangeHandler}>

            </MDEditor>
            <MDEditor.Markdown
                width={'100%'}
                height={'100%'}
                source={texts}
            ></MDEditor.Markdown>
        </StyledBoardDetailBody>
    );
}

export default BoardDetailBody;
