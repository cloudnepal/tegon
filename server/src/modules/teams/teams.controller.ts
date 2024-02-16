/** Copyright (c) 2024, Tegon, all rights reserved. **/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Team, TeamPreference, UsersOnTeams } from '@prisma/client';
import { SessionContainer } from 'supertokens-node/recipe/session';

import { AuthGuard } from 'modules/auth/auth.guard';
import { Session as SessionDecorator } from 'modules/auth/session.decorator';

import {
  UpdateTeamInput,
  TeamRequestParams,
  PreferenceInput,
  WorkspaceRequestParams,
  CreateTeamInput,
  TeamMemberInput,
} from './teams.interface';
import TeamsService from './teams.service';

@Controller({
  version: '1',
  path: 'teams',
})
@ApiTags('Teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  @UseGuards(new AuthGuard())
  async getAllTeams(
    @SessionDecorator() session: SessionContainer,
    @Query() workspaceId: WorkspaceRequestParams,
  ): Promise<Team[]> {
    const userId = session.getUserId();
    return await this.teamsService.getAllTeams(workspaceId, userId);
  }

  @Get(':teamId')
  @UseGuards(new AuthGuard())
  async getTeam(
    @Param()
    teamId: TeamRequestParams,
  ): Promise<Team> {
    return await this.teamsService.getTeam(teamId);
  }

  @Post()
  @UseGuards(new AuthGuard())
  async createTeam(
    @SessionDecorator() session: SessionContainer,
    @Query() WorkspaceParams: WorkspaceRequestParams,
    @Body() teamData: CreateTeamInput,
  ): Promise<Team> {
    const userId = session.getUserId();
    return await this.teamsService.createTeam(
      WorkspaceParams,
      userId,
      teamData,
    );
  }

  @Post(':teamId')
  @UseGuards(new AuthGuard())
  async updateTeam(
    @Param()
    teamRequestParams: TeamRequestParams,
    @Body() teamData: UpdateTeamInput,
  ): Promise<Team> {
    return await this.teamsService.updateTeam(teamRequestParams, teamData);
  }

  @Delete(':teamId')
  @UseGuards(new AuthGuard())
  async deleteTeam(
    @Param()
    teamRequestParams: TeamRequestParams,
  ): Promise<Team> {
    return await this.teamsService.deleteTeam(teamRequestParams);
  }

  @Post(':teamId/preference')
  @UseGuards(new AuthGuard())
  async createUpdatePreference(
    @Param()
    teamRequestParams: TeamRequestParams,
    @Body() preferenceData: PreferenceInput,
  ): Promise<TeamPreference> {
    return await this.teamsService.createUpdatePreference(
      teamRequestParams,
      preferenceData,
    );
  }

  @Post(':teamId/add_member')
  @UseGuards(new AuthGuard())
  async addTeamMember(
    @Param()
    teamRequestParams: TeamRequestParams,
    @Body() teamMemberData: TeamMemberInput,
  ): Promise<UsersOnTeams> {
    return await this.teamsService.addTeamMember(
      teamRequestParams.teamId,
      teamMemberData.userId,
    );
  }

  @Get(':teamId/members')
  @UseGuards(new AuthGuard())
  async getTeamMembers(
    @Param()
    teamRequestParams: TeamRequestParams,
  ): Promise<UsersOnTeams[]> {
    return await this.teamsService.getTeamMembers(
      teamRequestParams,
    );
  }

  @Delete(':teamId/remove_member')
  @UseGuards(new AuthGuard())
  async removeTeamMemeber(
    @Param()
    teamRequestParams: TeamRequestParams,
    @Body() teamMemberData: TeamMemberInput,
  ): Promise<UsersOnTeams> {
    return await this.teamsService.removeTeamMember(
      teamRequestParams,
      teamMemberData
    );
  }

}
