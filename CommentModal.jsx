import React, { useState } from 'react';
import styled from 'styled-components';

// Overlay that blurs background and covers the whole screen
const ModalOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: rgba(0,0,0,0.5);
   backdrop-filter: blur(5px);
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 1000;
`;

// Container for the modal content
const ModalContainer = styled.div`
   background: #fff;
   border-radius: 8px;
   width: 500px;
   max-width: 90%;
   padding: 20px;
   position: relative;
   box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

// Close button styling
const CloseButton = styled.button`
   position: absolute;
   top: 15px;
   right: 15px;
   background: transparent;
   border: none;
   font-size: 24px;
   font-weight: bold;
   cursor: pointer;
   color: #666;
`;

// Header for modal
const Header = styled.h3`
   margin: 0;
   font-size: 20px;
   margin-bottom: 10px;
`;

// Container for the list of comments
const CommentList = styled.div`
   max-height: 300px;
   overflow-y: auto;
   margin-bottom: 20px;
`;

// Individual comment styling
const CommentItem = styled.div`
   padding: 8px 10px;
   border-bottom: 1px solid #eee;
   font-size: 14px;
   color: #333;
`;

// Styling for the input area and post button
const CommentInputWrapper = styled.div`
   display: flex;
   gap: 10px;
`;

const CommentInput = styled.input`
   flex: 1;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 4px;
   font-size: 14px;
`;

const PostButton = styled.button`
   padding: 10px 16px;
   background: linear-gradient(to right, #5c3317, rgb(176, 78, 12));
   color: white;
   border: none;
   border-radius: 4px;
   font-size: 14px;
   cursor: pointer;
   transition: transform 0.2s ease;

   &:hover {
      transform: scale(0.98);
   }
`;

const CommentModal = ({ isOpen, onClose, issueComments, onUpdateComments }) => {
   // issueComments is passed in as the initial static comments for the selected issue.
   // onUpdateComments is a callback to update the comments globally (for example, in your parent's state or context).
   const [comments, setComments] = useState(issueComments || []);
   const [newComment, setNewComment] = useState('');

   if (!isOpen) return null;

   const handlePostComment = () => {
      if (newComment.trim()) {
         const updatedComments = [...comments, newComment.trim()];
         setComments(updatedComments);
         onUpdateComments && onUpdateComments(updatedComments); // Update parent/global state if provided
         setNewComment('');
      }
   };

   return (
      <ModalOverlay>
         <ModalContainer>
         <CloseButton onClick={onClose}>&times;</CloseButton>
         <Header>Comments</Header>
         <CommentList>
            {comments.length > 0 ? (
               comments.map((comment, idx) => (
               <CommentItem key={idx}>{comment}</CommentItem>
               ))
            ) : (
               <p>No comments yet.</p>
            )}
         </CommentList>
         <CommentInputWrapper>
            <CommentInput
               type="text"
               placeholder="Add a comment..."
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
            />
            <PostButton onClick={handlePostComment}>Post</PostButton>
         </CommentInputWrapper>
         </ModalContainer>
      </ModalOverlay>
   );
};

export default CommentModal;
