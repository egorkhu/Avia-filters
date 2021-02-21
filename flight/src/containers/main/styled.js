import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  
`

export const Loading = styled.p`
  width: 100%;
  display: flex;  
  justify-content: center;
  align-items: center;
  
`

export const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  box-sizing: border-box;
  transition: all .3s;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.008);
  }
  
  & hr {
    width: 100%;
    height: 2px;
    color: #0087c9;
    margin: 0;
    background-color: #0087c9;
    border: none;
  }

  & button {
    width: 100%;
    background-color: #ffb168;
    color: white;
    border: none;
    padding: 1rem 0;
    font-size: 1rem;
    outline: none;
    transition: all .3s;
    cursor: pointer;

    &:hover {
      background-color: #fd9332;
    }

    &:active {
      background-color: #fa7d0f;
      cursor: pointer;
    }
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10vh;
  min-height: 50px;
  background-color: #0087c9;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
`

export const InfoPrice = styled.span`
  font-size: 1.5rem;
`

export const InfoPass = styled.span`
  font-size: .7rem;
`

export const CardDirection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  
  & hr {
    width: 100%;
    height: 1px;
    color: #e5e5e5;
    margin: 0;
    background-color: #e5e5e5;
    border: none;
  }
`

export const Route = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  
  & .arrow {
    width: 20px;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDYuMTM0LDI0MS44NDNjLTAuMDA2LTAuMDA2LTAuMDExLTAuMDEzLTAuMDE4LTAuMDE5bC0xMDQuNTA0LTEwNGMtNy44MjktNy43OTEtMjAuNDkyLTcuNzYyLTI4LjI4NSwwLjA2OCAgICBjLTcuNzkyLDcuODI5LTcuNzYyLDIwLjQ5MiwwLjA2NywyOC4yODRMNDQzLjU1OCwyMzZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQyMy41NTcgICAgbC03MC4xNjIsNjkuODI0Yy03LjgyOSw3Ljc5Mi03Ljg1OSwyMC40NTUtMC4wNjcsMjguMjg0YzcuNzkzLDcuODMxLDIwLjQ1Nyw3Ljg1OCwyOC4yODUsMC4wNjhsMTA0LjUwNC0xMDQgICAgYzAuMDA2LTAuMDA2LDAuMDExLTAuMDEzLDAuMDE4LTAuMDE5QzUxMy45NjgsMjYyLjMzOSw1MTMuOTQzLDI0OS42MzUsNTA2LjEzNCwyNDEuODQzeiIgZmlsbD0iIzAwODdjOSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4K');
    background-size: 20px 20px;
  }
  
  & span span {
    color: #0087c9;
  }
`

export const DateTime = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: .5rem;

  & span {
    font-size: 1.2rem;
    font-weight: 400;
  }
  
  & .time {
    line-height: 20px;
    display: flex;
    align-items: center;
  }
  
  & .time::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ4OCA0ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OCA0ODg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTU0MC4zNikiPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0zNTEuMSw4NDYuOTZsLTk3LjEtNjcuOXYtMTE2LjdjMC01LjUtNC41LTEwLTEwLTEwcy0xMCw0LjUtMTAsMTB2MTIyYzAsMy4zLDEuNiw2LjMsNC4zLDguMmwxMDEuNCw3MC45DQoJCQkJYzEuNywxLjIsMy43LDEuOCw1LjcsMS44djBjMy4xLDAsNi4yLTEuNSw4LjItNC40QzM1Ni43LDg1Ni4zNiwzNTUuNiw4NTAuMTYsMzUxLjEsODQ2Ljk2eiIvPg0KCQkJPHBhdGggZD0iTTQxNi40LDYxMS45Nkw0MTYuNCw2MTEuOTZjLTQ2LjItNDYuMi0xMDcuNC03MS42LTE3Mi40LTcxLjZzLTEyNi4yLDI1LjQtMTcyLjQsNzEuNkMyNS40LDY1OC4xNiwwLDcxOS4zNiwwLDc4NC4zNg0KCQkJCXMyNS40LDEyNi4yLDcxLjYsMTcyLjRjNDYuMiw0Ni4yLDEwNy40LDcxLjYsMTcyLjQsNzEuNnMxMjYuMi0yNS40LDE3Mi40LTcxLjZzNzEuNi0xMDcuNCw3MS42LTE3Mi40UzQ2Mi42LDY1OC4xNiw0MTYuNCw2MTEuOTYNCgkJCQl6IE0yNTQsMTAwOC4xNkwyNTQsMTAwOC4xNnYtNDAuOGMwLTUuNS00LjUtMTAtMTAtMTBzLTEwLDQuNS0xMCwxMHY0MC44Yy0xMTUuNi01LjEtMjA4LjctOTguMi0yMTMuOC0yMTMuOEg2MQ0KCQkJCWM1LjUsMCwxMC00LjUsMTAtMTBzLTQuNS0xMC0xMC0xMEgyMC4yYzUuMS0xMTUuNiw5OC4yLTIwOC43LDIxMy44LTIxMy44djQwLjhjMCw1LjUsNC41LDEwLDEwLDEwczEwLTQuNSwxMC0xMHYtNDAuOA0KCQkJCWMxMTUuNiw1LjEsMjA4LjcsOTguMiwyMTMuOCwyMTMuOEg0MjdjLTUuNSwwLTEwLDQuNS0xMCwxMHM0LjUsMTAsMTAsMTBoNDAuOEM0NjIuNyw5MDkuOTYsMzY5LjYsMTAwMy4wNiwyNTQsMTAwOC4xNnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K);
    background-size: 15px 15px;
    background-repeat: no-repeat;
    margin-right: 5px;
  }
  
  & span span {
    color: #0087c9;
    font-size: .9rem;
  }
`

export const Transfer = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding: 0 4rem;
  
  & hr {
    color: #a2a2a2;
    background-color: #a2a2a2;
  }
  
  & p {
    color: #ffb168;
    padding: 0 10px;
    margin: 0;
  }
`

export const Carrier = styled.p`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

export const ShowMore = styled.button`
  width: 200px;
  height: 30px;
  font-size: 1rem;
  border: 1px solid #575454;
  background-color: #f1f1f1;
  color: black;
  cursor: pointer;
  outline: none;
  transition: all .3s;

  &:hover {
    background-color: #dbdbdb;
  }

  &:active {
    background-color: #c3c3c3;
  }
`