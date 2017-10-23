File structure:

- app: main folder 
-- core: module with all core services/handers/guards/interceptors
-- shared: module with all components and services used across app (multiple usage)
-- #name: components named based on purpose corresponding to screens
--- #name.component.ts: file with component declaration
--- #name.component.spec.ts: file with unit tests for the component
--- #name.component.html: file with components html structure
--- #name.component.scss: file with components styles
--- #name.models.ts: file with model classes used by the component
--- #name.service.ts: file with service class used by the component
--- #name.module.ts: file for aggregating component files into a single module

--- #name.routing.ts: optional file containing SPA routing declarations

- assets: place for all custom images/fonts etc.

- environments: place for all config settings like urls (can be different based on used environment)

- styles: place for all common styles 
