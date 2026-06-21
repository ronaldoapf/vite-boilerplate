import { DesignSystemLayout } from '@/components/layout/design-layout'
import { ColorsPage } from '@/pages/design-system/colors'
import { ComponentsPage } from '@/pages/design-system/components'
import { DataTablePage } from '@/pages/design-system/data-table'
import { Routes, Route } from 'react-router-dom'

export function AppRouter() {
	return (
		<Routes>
			<Route path="/design-system" element={<DesignSystemLayout />}>
				<Route path="colors" element={<ColorsPage />} />
				<Route path="components" element={<ComponentsPage />} />
				<Route path="data-table" element={<DataTablePage />} />
			</Route>
		</Routes>
	)
}