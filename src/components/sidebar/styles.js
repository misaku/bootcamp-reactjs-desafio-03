import styled from 'styled-components';

export const SidebarDiv = styled.aside`
  width: 320px;
  max-width: 50%;
  top: 20px;
  bottom: 20px;
  left: 20px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  height: auto;
  position: absolute;
  z-index: 3;
  overflow: hidden;
  flex-direction: column;
  ul{
    list-style: none;
    margin: 0;
    display: flex;
    padding: 15px;
    flex-direction: column;
    li{
      display: flex;
      flex: 1;
      justify-content: center;
      align-content: center;
      padding: 5px 0;
      border-bottom: 1px solid #f4f4f4;
      &:hover{
        background: #f4f4f4;
        border-color: #dfdfdf;
      }
      div{
        width: 75px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
            img{
              width: 60px;
              height: 60px;
              display: flex;
              border-radius: 100%;
            }
      }

      a{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-decoration: none;
        color: #000;
        &:hover{
         text-decoration: underline;
        }
        p{
          align-content: center;
          strong{
            display: block;
          }
        }

      }
      button{
      width: 40px;
      background: none;
      border: none;
      cursor: pointer;
        i{
          color: #d10000;
          
        }
        &:hover{
          i{
          font-size: 25px;
          }
        }
      }
      i{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin: 10px;
        margin-right: 0;
        color: #c7c7c7;
      }
    }
  }
`;
