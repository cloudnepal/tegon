/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { DialogContent, DialogHeader, DialogTitle } from 'components/ui/dialog';

import { NewIssue } from './new-issue';

interface NewIssueDialogProps {
  onClose: () => void;
}

export function NewIssueDialog({ onClose }: NewIssueDialogProps) {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader className="p-3 pb-0">
        <DialogTitle className="text-sm text-muted-foreground/80 font-normal">
          New issue
        </DialogTitle>
      </DialogHeader>

      <NewIssue onClose={onClose} />
    </DialogContent>
  );
}
