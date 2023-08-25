terraform {
  source = "../../../modules//pfias"
}

include {
  path = find_in_parent_folders()
}
