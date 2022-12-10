import styled from "styled-components";

export const HomeBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Loader = styled.div`

  animation: is-rotating 1s infinite;
  border: 6px solid var(--color-grey-5);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  height: 50px;
  width: 50px;
  margin-top: 150px;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`

export const TechTitleBox = styled.div`
    width: 100%;
    padding: 15px 0 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h2 {
        font-weight: 600;
        font-size: 16px;
        color: var(--color-grey-0);
    }

    & > button {
        font-weight: 600;
        font-size: 16px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
        border-radius: 4px;
        padding: 10px;
        border: 1px solid var(--color-grey-3);

        :hover {
            background-color: var(--color-grey-1);
            border: 1px solid var(--color-grey-1);
        }
    }
`

export const TechList = styled.ul`
    list-style: none;
    width: 100%;
    padding: 23px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 50px;
`

export const TechListCard = styled.li`
    width: 100%;
    background-color: var(--color-grey-4);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 22px;

    & > p {
        font-weight: 700;
        font-size: 14px;
        color: var(--color-grey-0);
    }

    & > p {
        color: var(--color-grey-0);
        font-weight: 400;
        font-size: 16px;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 25px;

        & > span {
            font-weight: 400;
            font-size: 12px;
            color: var(--color-grey-1);
        }

        & > button {
            background-color: transparent;
            border-style: none;
            color: var(--color-grey-1);
        }
    }

    :hover {
        background-color: var(--color-grey-2);

        & > div {
            & > span {
                color: var(--color-grey-0);
            }

            & > button {
            color: var(--color-grey-0);
            }
            
        }
    }
`