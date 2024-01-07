import React from "react";
import { StyledBoardDetailCommentWrapper, StyledBoardDetailCreateDateWrapper, StyledBoardDetailCreatorWrapper, StyledBoardDetailEtcWrapper, StyledBoardDetailHeader, StyledBoardDetailSecondTitleWrapper, StyledBoardDetailTitleWrapper, StyledBoardDetailViewWrapper } from "./style";

const BoardDetailHeader = ({title, creator, view, comment, createDate})=>{

    return(
        <StyledBoardDetailHeader>
            <StyledBoardDetailTitleWrapper>
                {title}
            </StyledBoardDetailTitleWrapper>
            <StyledBoardDetailSecondTitleWrapper>
                <StyledBoardDetailCreatorWrapper>
                    {creator}
                </StyledBoardDetailCreatorWrapper>
                <StyledBoardDetailEtcWrapper>
                    <StyledBoardDetailViewWrapper>
                        조회수 | {view}
                    </StyledBoardDetailViewWrapper>
                    <StyledBoardDetailCommentWrapper>
                        댓글 | {comment}
                    </StyledBoardDetailCommentWrapper>
                    <StyledBoardDetailCreateDateWrapper>
                        작성일 | {createDate}
                    </StyledBoardDetailCreateDateWrapper>
                </StyledBoardDetailEtcWrapper>
            </StyledBoardDetailSecondTitleWrapper>
        </StyledBoardDetailHeader>
    )
}

export default BoardDetailHeader;
