import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9;
  background: rgba(0,0,0,0.85);
  justify-content: center;
  align-content: center;
  div.content{
    display: flex;
    min-width: 300px;
    max-width: 100%;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    div.modal{
      overflow: hidden;
      background: #fff;
      border-radius: 15px;
      min-width: 300px;
      max-width: 80%;
      min-height: 50px;
      height: auto;
      h1{
        padding:20px;
        padding-bottom: 0;
        margin: 0;
        font-size: 18px;
        width: 100%;
        text-align: center;
      }
      form{
        padding: 20px;
        padding-top: 15px;
        display: flex;
        flex-direction: column;
        input{
          width: 100%;
          height: 35px;
          line-height: 35px;
          border: solid 1px #cdcdcd;
          border-radius: 5px;
          padding: 10px;
          margin-bottom: 10px;
        }
        div.group{
          display: flex;
          flex: 1;
          flex-direction: row;
          button{
            display: flex;
            flex: 1;
            height: 40px;
            border: solid 2px;
            justify-content: center;
            align-content: center;
            text-align: center;
            color: #fff;
            &.cancel{
              background: #c4c4c4;
              border-color: #ababab;
              margin-right: 3px;
            }
            &.save{
              background: #a1bc90;
              border-color: #92ab83;
              margin-left: 3px;
            }
           }
        }

      }
    }
  }
`;
