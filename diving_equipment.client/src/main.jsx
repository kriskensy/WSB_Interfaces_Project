import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout/Layout.jsx';

import { DeactivatedEquipment } from './Equipment/DeactivatedEquipmentPage.jsx';
import { NewEquipment } from './Equipment/NewEquipmentPage.jsx';
import { FindEquipment } from './Equipment/FindEquipmentPage.jsx';
import { NextRevisions } from './Equipment/NextRevisionsPage.jsx';

import { Buddys } from './Additions/BuddysPage.jsx';
import { Certificates } from './Additions/CertificatesPage.jsx';
import { Logbook } from './Additions/LogbookPage.jsx';
import { Statistics } from './Additions/StatisticsPage.jsx';

import { Accessories } from './Equipment/AccessoriesPage.jsx';
import { Computers } from './Equipment/ComputersPage.jsx';
import { Fins } from './Equipment/FinsPage.jsx';
import { Jackets } from './Equipment/JacketsPage.jsx';
import { Masks } from './Equipment/MasksPage.jsx';
import { Regulators } from './Equipment/RegulatorsPage.jsx';
import { Suits } from './Equipment/SuitsPage.jsx';
import { Tanks } from './Equipment/TanksPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>

                <Route path='/DeactivatedEquipment' element={<Layout />}>
                    <Route index element={<DeactivatedEquipment />} />
                </Route>
                <Route path='/NewEquipment' element={<Layout />}>
                    <Route index element={<NewEquipment />} />
                </Route>
                <Route path='/FindEquipment' element={<Layout />}>
                    <Route index element={<FindEquipment />} />
                </Route>
                <Route path='/NextRevisions' element={<Layout />}>
                    <Route index element={<NextRevisions />} />
                </Route>

                <Route path='/Buddys' element={<Layout />}>
                    <Route index element={<Buddys />} />
                </Route>
                <Route path='/Certificates' element={<Layout />}>
                    <Route index element={<Certificates />} />
                </Route>
                <Route path='/Logbook' element={<Layout />}>
                    <Route index element={<Logbook />} />
                </Route>
                <Route path='/Statistics' element={<Layout />}>
                    <Route index element={<Statistics />} />
                </Route>

                <Route path='/Accessories' element={<Layout />}>
                    <Route index element={<Accessories />} />
                </Route>
                <Route path='/Computers' element={<Layout />}>
                    <Route index element={<Computers />} />
                </Route>
                <Route path='/Fins' element={<Layout />}>
                    <Route index element={<Fins />} />
                </Route>
                <Route path='/Jackets' element={<Layout />}>
                    <Route index element={<Jackets />} />
                </Route>
                <Route path='/Masks' element={<Layout />}>
                    <Route index element={<Masks />} />
                </Route>
                <Route path='/Regulators' element={<Layout />}>
                    <Route index element={<Regulators />} />
                </Route>
                <Route path='/Suits' element={<Layout />}>
                    <Route index element={<Suits />} />
                </Route>
                <Route path='/Tanks' element={<Layout />}>
                    <Route index element={<Tanks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);