import React, { FC, PropsWithChildren, ReactNode, useContext } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

interface KeepAliveLayoutProps extends PropsWithChildren {
  keepPaths: Array<string | RegExp>;
  keepElements?: Record<string, ReactNode>;
  dropByPath?: (path: string) => void;
}

const keepElements: Record<string, ReactNode> = {};

const keepAliveContext = React.createContext<KeepAliveLayoutProps>({
  keepPaths: [],
  keepElements,
  dropByPath: (path: string) => {
    keepElements[path] = null;
  },
});

const isKeepPath = (path: string, keepPaths: Array<string | RegExp>) => {
  return keepPaths.some(pathItem => {
    if (typeof pathItem === 'string') {
      return pathItem.toLocaleLowerCase() === path.toLocaleLowerCase();
    }
    return pathItem.test(path);
  });
};

export const useKeepAliveOutlet = () => {
  const { keepPaths, keepElements } = useContext<KeepAliveLayoutProps>(keepAliveContext);
  const { pathname } = useLocation();
  const element = useOutlet();

  const isKeep = isKeepPath(pathname, keepPaths);

  if (isKeep && !keepElements![pathname]) {
    keepElements![pathname] = element;
  }

  return (
    <>
      {Object.entries(keepElements!).map(([path, ele]) => {
        return (
          <div className="keep-alive-element" key={path} hidden={pathname !== path}>
            {ele}
          </div>
        );
      })}
      {!isKeep && element}
    </>
  );
};

const KeepAliveLayout: FC<KeepAliveLayoutProps> = props => {
  const { keepPaths, ...rest } = props;

  const { keepElements, dropByPath } = useContext<KeepAliveLayoutProps>(keepAliveContext);

  return <keepAliveContext.Provider value={{ keepPaths, keepElements, dropByPath }} {...rest} />;
};

export default KeepAliveLayout;
