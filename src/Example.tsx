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
                      goals: {
                        include: {
                          goal_reports: {
                            include: { goal_report_values: true },
                          },
                        },
                      },
                      subproject_reports: true,
                      places: {
                        include: {
                          other_places: {
                            include: {
                              charts: { include: { chart_subjects: true } },
                            },
                          },
                          charts: { include: { chart_subjects: true } },
                        },
                      },
                      charts: { include: { chart_subjects: true } },
                    },
                  },
                  project_users: true,
                  taxonomies: {
                    include: { taxa: { include: { subproject_taxa: true } } },
                  },
                  persons: true,
                  lists: {
                    include: {
                      list_values: true,
                      units: true,
                      fields: {
                        include: { field_types: true, widget_types: true },
                      },
                    },
                  },
                  gbif_taxa: true,
                  gbif_occurrences: true,
                  gbif_occurrence_downloads: true,
                  units: true,
                  observation_sources: true,
                  tile_layers: { include: { layer_options: true } },
                  vector_layers: {
                    include: {
                      layer_options: true,
                      vector_layer_displays: true,
                      vector_layer_geoms: true,
                    },
                  },
                  project_reports: true,
                  fields: {
                    include: { field_types: true, widget_types: true },
                  },
                  charts: { include: { chart_subjects: true } },
                },
              },
              ui_options: true,
              place_levels: true,
              subprojects: true,
              project_users: true,
              taxonomies: { include: { taxa: true } },
              taxa: true,
              persons: true,
              lists: {
                include: {
                  list_values: true,
                  units: true,
                  fields: {
                    include: { field_types: true, widget_types: true },
                  },
                },
              },
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
              goal_report_values: true,
              tile_layers: true,
              vector_layers: {
                include: {
                  layer_options: true,
                  vector_layer_displays: true,
                  vector_layer_geoms: true,
                },
              },
              layer_options: true,
              project_reports: true,
              subproject_reports: true,
              fields: {
                include: { field_types: true, widget_types: true },
              },
              places: {
                include: {
                  other_places: {
                    include: { charts: { include: { chart_subjects: true } } },
                  },
                  charts: { include: { chart_subjects: true } },
                },
              },
              charts: { include: { chart_subjects: true } },
              chart_subjects: true,
              vector_layer_displays: true,
              vector_layer_geoms: true,
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
            include: {
              widget_types: {
                include: {
                  fields: {
                    include: {
                      accounts: { include: { users: true } },
                      projects: true,
                      lists: true,
                    },
                  },
                },
              },
            },
          },
          fields: true,
        },
      })
      const widgetTypesShape = await db.widget_types.sync({
        include: {
          widgets_for_fields: {
            include: {
              field_types: {
                include: {
                  fields: {
                    include: {
                      accounts: { include: { users: true } },
                      lists: true,
                      projects: true,
                    },
                  },
                },
              },
            },
          },
          fields: {
            include: {
              accounts: { include: { users: true } },
              field_types: true,
              lists: true,
              projects: true,
            },
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
