import { useEffect, useState } from 'react'

import { LIB_VERSION } from 'electric-sql/version'
import { makeElectricContext } from 'electric-sql/react'
import { uniqueTabId } from 'electric-sql/util'
import { ElectricDatabase, electrify } from 'electric-sql/wa-sqlite'

import { authToken } from './auth'
import { Electric, schema } from './generated/client'

import './Example.css'

const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

export const Example = () => {
  const [electric, setElectric] = useState<Electric>()

  useEffect(() => {
    let isMounted = true

    const init = async () => {
      const config = {
        debug: import.meta.env.DEV,
        url: import.meta.env.ELECTRIC_SERVICE,
      }

      const { tabId } = uniqueTabId()
      const scopedDbName = `basic-${LIB_VERSION}-${tabId}.db`

      const conn = await ElectricDatabase.init(scopedDbName)
      const electric = await electrify(conn, schema, config)
      await electric.connect(authToken())

      if (!isMounted) {
        return
      }

      setElectric(electric)
    }

    init()

    return () => {
      isMounted = false
    }
  }, [])

  if (electric === undefined) {
    return null
  }

  return (
    <ElectricProvider db={electric}>
      <ExampleComponent />
    </ElectricProvider>
  )
}

const ExampleComponent = () => {
  const { db } = useElectric()!

  useEffect(() => {
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const userShape = await db.users.sync({
        include: {
          accounts: {
            include: {
              users: true,
              projects: {
                include: {
                  accounts: true,
                  place_levels: true,
                  subprojects: {
                    include: {
                      gbif_occurrences: true,
                      gbif_occurrence_downloads: true,
                      subproject_users: true,
                      subproject_taxa: true,
                      goals: { include: { goal_reports: true } },
                    },
                  },
                  project_users: true,
                  taxonomies: {
                    include: { taxa: { include: { subproject_taxa: true } } },
                  },
                  persons: true,
                  lists: { include: { list_values: true, units: true } },
                  gbif_taxa: true,
                  gbif_occurrences: true,
                  gbif_occurrence_downloads: true,
                  units: true,
                  observation_sources: true,
                },
              },
              ui_options: true,
              place_levels: true,
              subprojects: true,
              project_users: true,
              taxonomies: { include: { taxa: true } },
              taxa: true,
              persons: true,
              lists: { include: { list_values: true, units: true } },
              gbif_taxa: true,
              gbif_occurrences: true,
              gbif_occurrence_downloads: true,
              subproject_users: true,
              subproject_taxa: true,
              list_values: true,
              units: true,
              goals: true,
              goal_reports: true,
              observation_sources: true,
            },
          },
          ui_options: true,
          project_users: true,
          subproject_users: true,
        },
      })
      const messagesShape = await db.messages.sync({
        include: {
          user_messages: { include: { accounts: true, users: true } },
        },
      })
      const fieldTypesShape = await db.field_types.sync({
        include: {
          widgets_for_fields: {
            include: { widget_types: true },
          },
        },
      })
      const widgetTypesShape = await db.widget_types.sync({
        include: {
          widgets_for_fields: {
            include: { field_types: true },
          },
        },
      })

      // Resolves when the data has been synced into the local database.
      await userShape.synced
      await messagesShape.synced
      await fieldTypesShape.synced
      await widgetTypesShape.synced
    }

    syncItems()
  }, [])

  return (
    <div>hi. no example here - this is only to test migrations and syncing</div>
  )
}
