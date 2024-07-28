import { ReactNode } from 'react';
import { Nav, NavLink } from '@/components/Nav';

// force Next.js to not cache any Admin pages
export const dynamic = 'force-dynamic';

const AdminLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Nav>
        <NavLink href='/admin'>Dashboard</NavLink>
        <NavLink href='/admin/products'>Products</NavLink>
        <NavLink href='/admin/users'>Customer</NavLink>
        <NavLink href='/admin/orders'>Orders</NavLink>
      </Nav>
      <div className='container my-6'>{children}</div>
    </>
  );
};

export default AdminLayout;
