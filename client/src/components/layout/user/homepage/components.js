import styled from 'styled-components';


export const BannerContainer = styled.div`
div{
    position: relative;
    z-index: 2;
    padding-top: rem-calc(100);
}
background: #000;
margin-bottom: rem-calc(50);
min-height: 700px;
background-image: url("/images/banner.png");
background-position: 50%;
background-repeat: no-repeat;
position: relative;
&:before {
  content: "";
  display: block;
  background: #000;
  opacity: 0.5;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
&:after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 30%;
  // width: 0;
  // height: 0;
  // border-style: solid;
  // border-width: 0 50% 100px 50%;
  // border-color: transparent transparent #007bff transparent;
  padding-bottom: 10%;
  background: #fff;
  // clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
h2 {
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}
`


