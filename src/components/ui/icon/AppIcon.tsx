import { FC } from 'react';
import {
  ArrowDown,
  ArrowUp,
  Auth,
  Bell,
  Branding,
  Bug,
  Calendar,
  Chat,
  Dashboard,
  Database,
  Discord,
  Discourse,
  Doc,
  Gear,
  Github,
  Google,
  Lock,
  Logout,
  NotepadEdit,
  Plus,
  Sliders,
  Telegram,
  Twitter,
  User,
  Users,
  VideoPlayer,
} from './AppIconList';

export type AppIconType =
  | 'Twitter'
  | 'Discord'
  | 'Telegram'
  | 'Discourse'
  | 'Google'
  | 'Github'
  | 'Auth'
  | 'Branding'
  | 'Dashboard'
  | 'Database'
  | 'Gear'
  | 'Lock'
  | 'User'
  | 'Users'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'Sliders'
  | 'Plus'
  | 'Bell'
  | 'Bug'
  | 'Calendar'
  | 'Chat'
  | 'Doc'
  | 'VideoPlayer'
  | 'NotepadEdit'
  | 'Logout';

export interface AppIconInterface {
  name: AppIconType;
  className?: string;
}

const Components = {
  Twitter,
  Discord,
  Telegram,
  Discourse,
  Google,
  Github,
  Auth,
  Branding,
  Dashboard,
  Database,
  Gear,
  Lock,
  User,
  Users,
  ArrowUp,
  ArrowDown,
  Sliders,
  Plus,
  Bell,
  Bug,
  Calendar,
  Chat,
  Doc,
  VideoPlayer,
  NotepadEdit,
  Logout,
};
const AppIcon: FC<AppIconInterface> = ({ name, className = '' }) => {
  if (typeof Components[name] !== undefined) {
    const Component = Components[name];
    return <Component className={className} />;
  }

  return <></>;
};

export default AppIcon;
