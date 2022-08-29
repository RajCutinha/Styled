import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-rows: masonry;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
`;
