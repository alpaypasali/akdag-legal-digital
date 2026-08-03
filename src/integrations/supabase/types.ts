export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      article_categories: {
        Row: {
          created_at: string
          description: string
          id: string
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: string
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      articles: {
        Row: {
          author: string
          category_slug: string
          content_updated_at: string | null
          created_at: string
          excerpt: string
          faq: Json
          id: string
          meta_description: string
          meta_title: string
          noindex: boolean
          og_image_url: string
          published_at: string
          reading_minutes: number
          related_area_slug: string | null
          schema_type: string
          sections: Json
          slug: string
          sources: Json
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category_slug: string
          content_updated_at?: string | null
          created_at?: string
          excerpt?: string
          faq?: Json
          id?: string
          meta_description?: string
          meta_title?: string
          noindex?: boolean
          og_image_url?: string
          published_at?: string
          reading_minutes?: number
          related_area_slug?: string | null
          schema_type?: string
          sections?: Json
          slug: string
          sources?: Json
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category_slug?: string
          content_updated_at?: string | null
          created_at?: string
          excerpt?: string
          faq?: Json
          id?: string
          meta_description?: string
          meta_title?: string
          noindex?: boolean
          og_image_url?: string
          published_at?: string
          reading_minutes?: number
          related_area_slug?: string | null
          schema_type?: string
          sections?: Json
          slug?: string
          sources?: Json
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      practice_areas: {
        Row: {
          created_at: string
          featured: boolean
          heading: string
          id: string
          image_alt: string | null
          image_url: string | null
          intro: string
          is_active: boolean
          meta_description: string
          meta_title: string
          process_note: string
          processes: Json
          scope: Json
          situations: Json
          slug: string
          sort_order: number
          summary: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          featured?: boolean
          heading?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          intro?: string
          is_active?: boolean
          meta_description?: string
          meta_title?: string
          process_note?: string
          processes?: Json
          scope?: Json
          situations?: Json
          slug: string
          sort_order?: number
          summary?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          featured?: boolean
          heading?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          intro?: string
          is_active?: boolean
          meta_description?: string
          meta_title?: string
          process_note?: string
          processes?: Json
          scope?: Json
          situations?: Json
          slug?: string
          sort_order?: number
          summary?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      seo_checks: {
        Row: {
          base_url: string
          checked_count: number
          created_at: string
          id: string
          issue_count: number
          issues: Json
          kind: string
          status: string
        }
        Insert: {
          base_url?: string
          checked_count?: number
          created_at?: string
          id?: string
          issue_count?: number
          issues?: Json
          kind?: string
          status?: string
        }
        Update: {
          base_url?: string
          checked_count?: number
          created_at?: string
          id?: string
          issue_count?: number
          issues?: Json
          kind?: string
          status?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          description: string
          group_name: string
          id: string
          is_public: boolean
          key: string
          label: string
          placeholder: string
          sort_order: number
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          description?: string
          group_name?: string
          id?: string
          is_public?: boolean
          key: string
          label?: string
          placeholder?: string
          sort_order?: number
          updated_at?: string
          value?: string
        }
        Update: {
          created_at?: string
          description?: string
          group_name?: string
          id?: string
          is_public?: boolean
          key?: string
          label?: string
          placeholder?: string
          sort_order?: number
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_edit_content: { Args: { _user_id: string }; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "user"],
    },
  },
} as const
