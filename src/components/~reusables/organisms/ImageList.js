import React from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import { lightgrey, grey, theme_secondary } from "../variables/colors"
import ImageItem from "../molecules/ImageItem";
import ComponentLoader from "../organisms/ComponentLoader";

const ImageList = ({ title, images, imageLoader }) => {
  return (
    <StyledIL>
      <header>
        <h2>{title}</h2>
        <div className="title-section">
          <i className="material-icons">keyboard_arrow_left</i>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </header>
      {imageLoader ? (
        <ComponentLoader />
      ) : (
        <div>
          {images.length > 0
            ? images.slice(0, 2).map(image => {
                return (
                  <ImageItem
                    key={image.id}
                    imgSrc={image.urls.small}
                    imageAuthor={image.user.name}
                  />
                );
              })
            : null}
        </div>
      )}
    </StyledIL>
  );
};

const StyledIL = styled.section`
  flex-basis: 415px;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${normal_space} ${medium_space} 0 ${normal_space};
  overflow: hidden;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-section {

    i {
      font-size: 30px;
      cursor: pointer;
      color: ${lightgrey};
    }

    i:last-child {
      margin-left: 8px;
    }

    i:hover {
      color: ${theme_secondary}
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${grey};
  }

  @media only screen and (max-width: 749px) {
    padding: 0 ${normal_space};
  }

  @media only screen and (max-width: 499px) {
    flex-basis: auto;
  }
`;

export default ImageList;
