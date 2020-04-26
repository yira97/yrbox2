import React, { useState } from 'react';

type Root = {
}

const initRoot: Root = {
}

export const RootContext = React.createContext<[Root, React.Dispatch<React.SetStateAction<Root>>]>([initRoot, () => { }]);

export const RootProvider: React.FC = (props) => {
  const [rootState, setrootState] = useState(initRoot)

  return (
    <RootContext.Provider value={[rootState, setrootState]} >
      {props.children}
    </RootContext.Provider>
  );
}